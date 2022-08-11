import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    getFieldsListData,
    postFieldUpdate,
} from "../../../api/settings/fields";
import Field from "../Field";

export default function Contacts(props) {
    const queryClient = useQueryClient()

    const [data, setData] = useState([]);

    const settingsType = props.settingsType;
    const fieldListSettingType = "FieldList_" + settingsType;

    const {
        status,
        isLoading,
        error,
        data: fieldData,
    } = useQuery([fieldListSettingType], () => getFieldsListData(settingsType));

    useEffect(() => {
        if (status === "success") {
            if(!!fieldData.entity){
                setData(fieldData.entity);
            }
        }
    }, [fieldData, status]);

    const handleUpdateClick = (fieldData) => {
        mutation.mutate(fieldData);
    }

    const mutation = useMutation(
        async (updateFieldData) => postFieldUpdate(updateFieldData),
        {
            onSuccess: () => {
                // TODO notify user that the change is done successfully
            },
            onError: () => {
                queryClient.invalidateQueries([fieldListSettingType]);
            },
        }
    );

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const updatedData = reorder(
            data,
            result.source.index,
            result.destination.index
        );
        setData(updatedData);
    };

    //TODO Loader Component to be rendered here
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error;

    return (
        <React.Fragment>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="field-list">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {data.map((field, index) => (
                                <Draggable
                                    draggableId={field.id.toString()}
                                    index={index}
                                    key={field.id}
                                >
                                    {(provided) => (
                                        <Box
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            sx={{ marginBottom: "8px" }}
                                        >
                                            <Field
                                                field={field}
                                                dragHandleProps={
                                                    provided.dragHandleProps
                                                }
                                                handleUpdateClick={
                                                    handleUpdateClick
                                                }
                                            />
                                        </Box>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </React.Fragment>
    );
}

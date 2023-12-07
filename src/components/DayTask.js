import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import IconButton from "./IconButton";
import { images } from "../images";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.dayitemBackground};
  border-color: gray;
  border-width: 1px;
  border-radius: 30px;
  padding: 3px;
  padding-left: 20px;
  margin: 0px;
`;

const ScheduleTextWrapper = styled(View)`
  flex-direction: column;
  flex: 65%;
`;

const ScheduleTimeText = styled(Text)`
  color: gray;
  font-size: 14px;
`;

const EventNameText = styled(Text)`
  color: black;
  font-size: 15px;
`;

const NotesText = styled(Text)`
  color: gray;
  font-size: 12px;
`;

const ButtonWrapper = styled(View)`
  align-items: flex-end;
  flex-direction: row;
  flex: 1;
`;

const Task = ({ schedule, onDelete, onEdit }) => {
  const handleEdit = () => {
    // Call the onEdit function provided by the parent component
    onEdit(schedule);
  };

  return (
    <Container>
      <ScheduleTextWrapper>
        <ScheduleTimeText>{`${schedule.startTime}:00-${schedule.endTime}:00`}</ScheduleTimeText>
        <EventNameText>{schedule.eventName}</EventNameText>
        <NotesText>{schedule.notes}</NotesText>
      </ScheduleTextWrapper>
      <ButtonWrapper>
        <IconButton
          type={images.update}
          onPressOut={handleEdit}
          style={{ marginRight: 10 }}
        />
        <IconButton type={images.delete} onPressOut={onDelete} />
      </ButtonWrapper>
    </Container>
  );
};

export default Task;

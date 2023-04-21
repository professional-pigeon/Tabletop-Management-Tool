import React from "react";
import Note from "../../../components/multi/note/Note";

export default {
  title: 'Components/Multi/Note/Note',
  component: Note,
};

function Template(args) {
  const { note } = args
  return <Note note={note} />
}

export const Primary = Template.bind({});
Primary.args = { note: { id: 1, content: 'This is some very long note that I can see how the object expands and collapses on different sizes.... I guess there should be a character limit but notes can be long, maybe like 500char?', updatedAt: '03/13/2023'} }
import React from "react";
import NoteList from "../../../components/multi/note/NoteList";
import { note1, note2 } from '../../lib/constants'

const note = { id: 1, content: 'This is some very long note that I can see how the object expands and collapses on different sizes.... I guess there should be a character limit but notes can be long, maybe like 500char?', updatedAt: '03/13/2023'}

export default {
  title: 'Components/Multi/Note/NoteList',
  component: NoteList,
};

function Template(args) {
  const { notes } = args
  return <NoteList notes={notes} />
}

export const Primary = Template.bind({});
Primary.args = { notes: [note, note1, note2, note1, note2, note, note] }
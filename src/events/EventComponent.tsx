import React from 'react';

const EventComponent: React.FC = () => {
  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log('event', event.target.value);
  // };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event', event.target.value);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('Dragged', event);
  };
  return (
    <div>
      <h3>Event Component</h3>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;

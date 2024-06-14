import React from 'react';
import './App.css';
import ImageCarousel from './ImageCarousel';

const images = [
  { id: 1, src: 'https://img.freepik.com/free-vector/deadline-time-management-business-concept-vector_107791-42.jpg?t=st=1718289785~exp=1718293385~hmac=d1823ebd6c73cae6b431b0c9d3a55e5a2a363b1a830bd9903a9346f5da7597ae&w=740', data: 'Image 1 Data' },
  { id: 2, src: 'https://img.freepik.com/free-vector/agile-method-concept-illustration_114360-9809.jpg?t=st=1718289794~exp=1718293394~hmac=334eec3d18bc42ff48e25f74d675cb553f4e402603f49d83d0d912c9335b6395&w=740', data: 'Image 2 Data' },
  { id: 3, src: 'https://img.freepik.com/premium-vector/business-timing-flat-design-element-concept-graphic-design-illustration_385073-497.jpg?w=900', data: 'Image 3 Data' },
  { id: 4, src: 'https://img.freepik.com/free-photo/group-male-architect-preparing-blueprint-office_23-2147839869.jpg?t=st=1718289809~exp=1718293409~hmac=20eeb6aeb7174fa925e7418ad120f229f5a2a35c9bef7e1c5d27d84b991ab43c&w=996', data: 'Image 4 Data' },
  { id: 5, src: 'https://img.freepik.com/free-photo/startup-new-business-plan-strategy-teamwork-concept_53876-165253.jpg?t=st=1718289819~exp=1718293419~hmac=6b6981040cbf271c84cf9caf77f892500f0acd4e38539aac42be25f8581f14c3&w=740', data: 'Image 5 Data' },
  { id: 6, src: 'https://img.freepik.com/free-vector/deadline-time-management-business-concept-vector_107791-42.jpg?t=st=1718289785~exp=1718293385~hmac=d1823ebd6c73cae6b431b0c9d3a55e5a2a363b1a830bd9903a9346f5da7597ae&w=740', data: 'Image 6 Data' },
  { id: 7, src: 'https://img.freepik.com/free-vector/agile-method-concept-illustration_114360-9809.jpg?t=st=1718289794~exp=1718293394~hmac=334eec3d18bc42ff48e25f74d675cb553f4e402603f49d83d0d912c9335b6395&w=740', data: 'Image 7 Data' },
  { id: 8, src: 'https://img.freepik.com/premium-vector/business-timing-flat-design-element-concept-graphic-design-illustration_385073-497.jpg?w=900', data: 'Image 8 Data' },
  { id: 9, src: 'https://img.freepik.com/free-photo/group-male-architect-preparing-blueprint-office_23-2147839869.jpg?t=st=1718289809~exp=1718293409~hmac=20eeb6aeb7174fa925e7418ad120f229f5a2a35c9bef7e1c5d27d84b991ab43c&w=996', data: 'Image 9 Data' },
  { id: 10, src: 'https://img.freepik.com/free-photo/startup-new-business-plan-strategy-teamwork-concept_53876-165253.jpg?t=st=1718289819~exp=1718293419~hmac=6b6981040cbf271c84cf9caf77f892500f0acd4e38539aac42be25f8581f14c3&w=740', data: 'Image 10 Data' },
  { id: 11, src: 'https://img.freepik.com/free-vector/deadline-time-management-business-concept-vector_107791-42.jpg?t=st=1718289785~exp=1718293385~hmac=d1823ebd6c73cae6b431b0c9d3a55e5a2a363b1a830bd9903a9346f5da7597ae&w=740', data: 'Image 11 Data' },
  { id: 12, src: 'https://img.freepik.com/free-vector/agile-method-concept-illustration_114360-9809.jpg?t=st=1718289794~exp=1718293394~hmac=334eec3d18bc42ff48e25f74d675cb553f4e402603f49d83d0d912c9335b6395&w=740', data: 'Image 12 Data' },
  { id: 13, src: 'https://img.freepik.com/premium-vector/business-timing-flat-design-element-concept-graphic-design-illustration_385073-497.jpg?w=900', data: 'Image 13 Data' },
  { id: 14, src: 'https://img.freepik.com/free-photo/group-male-architect-preparing-blueprint-office_23-2147839869.jpg?t=st=1718289809~exp=1718293409~hmac=20eeb6aeb7174fa925e7418ad120f229f5a2a35c9bef7e1c5d27d84b991ab43c&w=996', data: 'Image 14 Data' },
  { id: 15, src: 'https://img.freepik.com/free-photo/startup-new-business-plan-strategy-teamwork-concept_53876-165253.jpg?t=st=1718289819~exp=1718293419~hmac=6b6981040cbf271c84cf9caf77f892500f0acd4e38539aac42be25f8581f14c3&w=740', data: 'Image 15 Data' },
  { id: 16, src: 'https://img.freepik.com/free-vector/deadline-time-management-business-concept-vector_107791-42.jpg?t=st=1718289785~exp=1718293385~hmac=d1823ebd6c73cae6b431b0c9d3a55e5a2a363b1a830bd9903a9346f5da7597ae&w=740', data: 'Image 16 Data' },
  { id: 17, src: 'https://img.freepik.com/free-vector/agile-method-concept-illustration_114360-9809.jpg?t=st=1718289794~exp=1718293394~hmac=334eec3d18bc42ff48e25f74d675cb553f4e402603f49d83d0d912c9335b6395&w=740', data: 'Image 17 Data' },
  { id: 18, src: 'https://img.freepik.com/premium-vector/business-timing-flat-design-element-concept-graphic-design-illustration_385073-497.jpg?w=900', data: 'Image 18 Data' },
  { id: 19, src: 'https://img.freepik.com/free-photo/group-male-architect-preparing-blueprint-office_23-2147839869.jpg?t=st=1718289809~exp=1718293409~hmac=20eeb6aeb7174fa925e7418ad120f229f5a2a35c9bef7e1c5d27d84b991ab43c&w=996', data: 'Image 19 Data' },
  { id: 20, src: 'https://img.freepik.com/free-photo/startup-new-business-plan-strategy-teamwork-concept_53876-165253.jpg?t=st=1718289819~exp=1718293419~hmac=6b6981040cbf271c84cf9caf77f892500f0acd4e38539aac42be25f8581f14c3&w=740', data: 'Image 20 Data' },
  { id: 21, src: 'https://img.freepik.com/free-vector/deadline-time-management-business-concept-vector_107791-42.jpg?t=st=1718289785~exp=1718293385~hmac=d1823ebd6c73cae6b431b0c9d3a55e5a2a363b1a830bd9903a9346f5da7597ae&w=740', data: 'Image 21 Data' },
  { id: 22, src: 'https://img.freepik.com/free-vector/agile-method-concept-illustration_114360-9809.jpg?t=st=1718289794~exp=1718293394~hmac=334eec3d18bc42ff48e25f74d675cb553f4e402603f49d83d0d912c9335b6395&w=740', data: 'Image 22 Data' },
  { id: 23, src: 'https://img.freepik.com/premium-vector/business-timing-flat-design-element-concept-graphic-design-illustration_385073-497.jpg?w=900', data: 'Image 23 Data' },
  { id: 24, src: 'https://img.freepik.com/free-photo/group-male-architect-preparing-blueprint-office_23-2147839869.jpg?t=st=1718289809~exp=1718293409~hmac=20eeb6aeb7174fa925e7418ad120f229f5a2a35c9bef7e1c5d27d84b991ab43c&w=996', data: 'Image 24 Data' },
  { id: 3, src: 'https://img.freepik.com/premium-vector/business-timing-flat-design-element-concept-graphic-design-illustration_385073-497.jpg?w=900', data: 'Image 3 Data' },
  { id: 4, src: 'https://img.freepik.com/free-photo/group-male-architect-preparing-blueprint-office_23-2147839869.jpg?t=st=1718289809~exp=1718293409~hmac=20eeb6aeb7174fa925e7418ad120f229f5a2a35c9bef7e1c5d27d84b991ab43c&w=996', data: 'Image 4 Data' },
  { id: 5, src: 'https://img.freepik.com/free-photo/startup-new-business-plan-strategy-teamwork-concept_53876-165253.jpg?t=st=1718289819~exp=1718293419~hmac=6b6981040cbf271c84cf9caf77f892500f0acd4e38539aac42be25f8581f14c3&w=740', data: 'Image 5 Data' },
  { id: 6, src: 'https://img.freepik.com/free-vector/deadline-time-management-business-concept-vector_107791-42.jpg?t=st=1718289785~exp=1718293385~hmac=d1823ebd6c73cae6b431b0c9d3a55e5a2a363b1a830bd9903a9346f5da7597ae&w=740', data: 'Image 6 Data' },
  { id: 7, src: 'https://img.freepik.com/free-vector/agile-method-concept-illustration_114360-9809.jpg?t=st=1718289794~exp=1718293394~hmac=334eec3d18bc42ff48e25f74d675cb553f4e402603f49d83d0d912c9335b6395&w=740', data: 'Image 7 Data' },
  { id: 8, src: 'https://img.freepik.com/premium-vector/business-timing-flat-design-element-concept-graphic-design-illustration_385073-497.jpg?w=900', data: 'Image 8 Data' },
  { id: 9, src: 'https://img.freepik.com/free-photo/group-male-architect-preparing-blueprint-office_23-2147839869.jpg?t=st=1718289809~exp=1718293409~hmac=20eeb6aeb7174fa925e7418ad120f229f5a2a35c9bef7e1c5d27d84b991ab43c&w=996', data: 'Image 9 Data' },
  { id: 10, src: 'https://img.freepik.com/free-photo/startup-new-business-plan-strategy-teamwork-concept_53876-165253.jpg?t=st=1718289819~exp=1718293419~hmac=6b6981040cbf271c84cf9caf77f892500f0acd4e38539aac42be25f8581f14c3&w=740', data: 'Image 10 Data' },
  { id: 11, src: 'https://img.freepik.com/free-vector/deadline-time-management-business-concept-vector_107791-42.jpg?t=st=1718289785~exp=1718293385~hmac=d1823ebd6c73cae6b431b0c9d3a55e5a2a363b1a830bd9903a9346f5da7597ae&w=740', data: 'Image 11 Data' },
  { id: 12, src: 'https://img.freepik.com/free-vector/agile-method-concept-illustration_114360-9809.jpg?t=st=1718289794~exp=1718293394~hmac=334eec3d18bc42ff48e25f74d675cb553f4e402603f49d83d0d912c9335b6395&w=740', data: 'Image 12 Data' },
  { id: 13, src: 'https://img.freepik.com/premium-vector/business-timing-flat-design-element-concept-graphic-design-illustration_385073-497.jpg?w=900', data: 'Image 13 Data' },
  { id: 14, src: 'https://img.freepik.com/free-photo/group-male-architect-preparing-blueprint-office_23-2147839869.jpg?t=st=1718289809~exp=1718293409~hmac=20eeb6aeb7174fa925e7418ad120f229f5a2a35c9bef7e1c5d27d84b991ab43c&w=996', data: 'Image 14 Data' },
  { id: 15, src: 'https://img.freepik.com/free-photo/startup-new-business-plan-strategy-teamwork-concept_53876-165253.jpg?t=st=1718289819~exp=1718293419~hmac=6b6981040cbf271c84cf9caf77f892500f0acd4e38539aac42be25f8581f14c3&w=740', data: 'Image 15 Data' },
  { id: 16, src: 'https://img.freepik.com/free-vector/deadline-time-management-business-concept-vector_107791-42.jpg?t=st=1718289785~exp=1718293385~hmac=d1823ebd6c73cae6b431b0c9d3a55e5a2a363b1a830bd9903a9346f5da7597ae&w=740', data: 'Image 16 Data' },
  { id: 17, src: 'https://img.freepik.com/free-vector/agile-method-concept-illustration_114360-9809.jpg?t=st=1718289794~exp=1718293394~hmac=334eec3d18bc42ff48e25f74d675cb553f4e402603f49d83d0d912c9335b6395&w=740', data: 'Image 17 Data' },
  { id: 18, src: 'https://img.freepik.com/premium-vector/business-timing-flat-design-element-concept-graphic-design-illustration_385073-497.jpg?w=900', data: 'Image 18 Data' },
  { id: 19, src: 'https://img.freepik.com/free-photo/group-male-architect-preparing-blueprint-office_23-2147839869.jpg?t=st=1718289809~exp=1718293409~hmac=20eeb6aeb7174fa925e7418ad120f229f5a2a35c9bef7e1c5d27d84b991ab43c&w=996', data: 'Image 19 Data' },
  { id: 20, src: 'https://img.freepik.com/free-photo/startup-new-business-plan-strategy-teamwork-concept_53876-165253.jpg?t=st=1718289819~exp=1718293419~hmac=6b6981040cbf271c84cf9caf77f892500f0acd4e38539aac42be25f8581f14c3&w=740', data: 'Image 20 Data' },
  { id: 21, src: 'https://img.freepik.com/free-vector/deadline-time-management-business-concept-vector_107791-42.jpg?t=st=1718289785~exp=1718293385~hmac=d1823ebd6c73cae6b431b0c9d3a55e5a2a363b1a830bd9903a9346f5da7597ae&w=740', data: 'Image 21 Data' },
  { id: 22, src: 'https://img.freepik.com/free-vector/agile-method-concept-illustration_114360-9809.jpg?t=st=1718289794~exp=1718293394~hmac=334eec3d18bc42ff48e25f74d675cb553f4e402603f49d83d0d912c9335b6395&w=740', data: 'Image 22 Data' },
  { id: 23, src: 'https://img.freepik.com/premium-vector/business-timing-flat-design-element-concept-graphic-design-illustration_385073-497.jpg?w=900', data: 'Image 23 Data' },
  { id: 24, src: 'https://img.freepik.com/free-photo/group-male-architect-preparing-blueprint-office_23-2147839869.jpg?t=st=1718289809~exp=1718293409~hmac=20eeb6aeb7174fa925e7418ad120f229f5a2a35c9bef7e1c5d27d84b991ab43c&w=996', data: 'Image 24 Data' },
  { id: 25, src: 'https://img.freepik.com/free-photo/startup-new-business-plan-strategy-teamwork-concept_53876-165253.jpg?t=st=1718289819~exp=1718293419~hmac=6b6981040cbf271c84cf9caf77f892500f0acd4e38539aac42be25f8581f14c3&w=740', data: 'Image 25 Data' },
  // Add more images as needed
];

function App() {
  return (
    <div className="App">
      <ImageCarousel images={images} />
    </div>
  );
}

export default App;

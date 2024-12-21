import React from 'react';
import { SimpleCell, TestCell, StudentCell } from './';

export const Leaderboard = ({
  tests,
  id,
  students,
}: {
  tests: any;
  id: number;
  students: any;
}) => {
  return (
    <table
      className='relative h-[1px] table-fixed border-collapse
                      border-spacing-0 overflow-hidden'
    >
      <thead>
        <tr>
          <SimpleCell name='Rank' />
          <SimpleCell name='Name of Student' />
          <SimpleCell name='Total Points' />

          {tests.map((test: any, idx: number) => (
            <TestCell
              key={idx}
              name={test[1].name}
              link={`/c/${id}/t/${test[0]}`}
              date={`${new Date(test[1].date).toDateString()}`}
              outof={`${test[1].totalPoints}`}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {students.map((student: any, idx: number) => {
          return (
            <tr key={idx}>
              <SimpleCell name={(idx + 1).toString()} />
              <StudentCell name={student.name} link='/u/1' />
              <SimpleCell
                name={student.points.toString()}
                widthReq={true}
                color='green-600'
                isNumber={true}
              />
              {student.tests.map((test: any, idx2: number) => (
                <SimpleCell
                  key={idx2}
                  name={test.toString()}
                  widthReq={true}
                  color='blue-500'
                  isNumber={true}
                />
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

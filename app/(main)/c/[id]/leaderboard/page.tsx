import { fetchLeaderboard } from './action';
import { Leaderboard } from '@/components/Leaderboard';


const LeaderboardPage = async ({
  params: { id },
}: {
  params: { id: number };
}) => {
  const { data }: { data: any } = await fetchLeaderboard(id);

  if (!data || !data.students || !data.tests || !data.leaderboard)
    return <div></div>;

  const { students, tests, leaderboard } = data;

  const sortedTests = Object.entries(tests)
    .map((test) => [test[0], test[1]])
    .sort(
      (a: any, b: any) =>
        new Date(b[1].date).getTime() - new Date(a[1].date).getTime()
    );

  const Students = Object.entries(leaderboard)
    .map((student: any) => {
      const uid = student[0];
      const user: User = {
        name: students[uid].toString().toUpperCase(),
        points: student[1].totalPoints,
        tests: [],
      };

      user.tests = sortedTests.map(
        (test: any) => student[1].testPoints[test[0]].points
      );

      return user;
    })
    .sort((a, b) => b.points - a.points);

  //TODO: pagination
  //TODO: your rank at the end or start
  //TODO: horizontal scrolling

  return (
    <div
      className='overflow-y-[unset] visible static flex h-auto
    min-h-0 opacity-100 contain-style'
    >
      <div
        className='relative bottom-0 left-0 right-0 top-0 z-auto 
      block min-h-full min-w-0 flex-1-auto'
      >
        <div className='relative z-auto h-auto min-h-full backface-visibility-h'>
          <div className='h-mainNavHgt'></div>
          <div className='h-12'></div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <Leaderboard
                        tests={sortedTests}
                        students={Students}
                        id={id}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;

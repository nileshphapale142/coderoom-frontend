import { MainNavFiller, CourseNavFiller } from '@/components/Utils';
import { EditQuestion } from '@/components/Question/Edit/editQuestion';

const EditQuestionPage = ({
  params,
}: {
  params: { id: number; tid: number; qid: number };
}) => {
  // TODO: add navigation button at the bottom (back and next)
  // TODO: pagination

  return (
    <>
      <div className='visible static flex h-auto min-h-screen bg-[#f0f4f9] opacity-100 contain-style'>
        <div className='relative bottom-0 left-0 right-0 top-0 z-auto block min-h-full min-w-0 flex-1-auto'>
          <div className='min-h-auto relative z-auto flex h-auto flex-col backface-visibility-h '>
            <MainNavFiller />
            <CourseNavFiller />
            <EditQuestion cid={params.id} tid={params.tid} qid={params.qid} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditQuestionPage;

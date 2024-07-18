'use client';

import { MainNavFiller } from '@/components/Utils';
import { QuestionSideBar } from '@/components/Popups';
import { EditorSection } from '@/components/Question/Solve/Editor/editorSection';
import { InformationSection } from '@/components/Question/Solve/Information/informationSection';

const QuestionPage = () => {
  //todo: make separate directory for all the components
  //todo: test, test result and current submission result page to be added
  //todo: fucking separate into components

  return (
    <>
      <div className='visibl ṇ n  be relative bottom-0 left-0 right-0 top-0 flex h-auto bg-[#f0f4f9] bg-white opacity-100 contain-style'>
        <div className='relative z-auto block h-full  flex-1-auto'>
          <div className='relative z-auto flex h-full flex-col backface-visibility-h '>
            <MainNavFiller />
            <div className='h-14'></div>

            <div className='relative flex h-[calc(100vh-120px)] flex-row overflow-hidden'>
              <InformationSection />

              {/* //todo: add slider if want to */}
              {/* <div className='h-full w-2 bg-black'>{'||'}</div> */}

              <EditorSection />
            </div>
          </div>
        </div>
      </div>

      <QuestionSideBar />
    </>
  );
};

export default QuestionPage;

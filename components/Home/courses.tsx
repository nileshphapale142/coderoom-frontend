import CourseBox  from "./courseBox";

export const Courses = () => {
  return (
    <div className='visible static flex h-auto min-h-0 opacity-100 contain-style'>
      <div
        className='relative bottom-0 left-0 right-0 top-0 z-auto block min-h-full 
        min-w-0 flex-1-auto '
      >
        <div className='relative z-auto h-auto min-h-full '>
          {/* // TODO: add backface-visibility: hidden */}

          <div className='h-[4.0625rem] flex-shrink-0'></div>

          <div>
            <div>
              <ol className='flex flex-wrap pl-6 pt-6 '>
                <CourseBox />
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

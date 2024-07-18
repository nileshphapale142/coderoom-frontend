import { MyDropDown } from '@/components/Utils';
import { selectedLanguage } from '@/Recoil';
import { languageOptions } from '@/Utils';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export const FeatureRow = () => {
  const [language, setLanguage] = useRecoilState(selectedLanguage);

  useEffect(() => {
    setLanguage(localStorage.getItem('userLanguage') || 'C');
  }, []);

  const requestFullScreen = () => {
    const element = document.documentElement; // full-screen the entire document
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  return (
    <div className='z-100 h-8 w-full border-b border-b-stone-400'>
      <div className='flex h-full flex-row items-center justify-between px-2'>
        {language && (
          <MyDropDown
            title='Language'
            options={languageOptions}
            selectHandler={(lang) => {
              setLanguage(lang);
              localStorage.setItem('userLanguage', lang);
            }}
            defaultValue={{ id: -1, name: language }}
            isAbsolute={true}
          />
        )}

        <div className='block py-2'>
          {/* //todo: separate the buttons into components */}

          <button className='inline-block rounded-2 p-2 hover:bg-gray-200'>
            {/* //todo: reset code button */}
            <div className='flex items-center justify-center'>
              <svg
                width='14'
                height='14'
                data-prefix='far'
                data-icon='arrow-rotate-left'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M40 224c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v80.1l20-23.5C125 63.4 186.9 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-50.4 0-97-16.7-134.4-44.8c-10.6-8-12.7-23-4.8-33.6s23-12.7 33.6-4.8C179.8 418.9 216.3 432 256 432c97.2 0 176-78.8 176-176s-78.8-176-176-176c-54.3 0-102.9 24.6-135.2 63.4l-.1 .2 0 0L93.1 176H184c13.3 0 24 10.7 24 24s-10.7 24-24 24H40z'
                ></path>
              </svg>
            </div>
          </button>

          <button
            className='inline-block rounded-2 p-2 hover:bg-gray-200 '
            onClick={requestFullScreen}
          >
            <div className='flex items-center justify-center '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='14'
                height='14'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M6.414 19H10a1 1 0 110 2H4a1 1 0 01-1-1v-6a1 1 0 112 0v3.586l4.293-4.293a1 1 0 011.414 1.414L6.414 19zM17.586 5H14a1 1 0 110-2h6a1 1 0 011 1v6a1 1 0 11-2 0V6.414l-4.293 4.293a1 1 0 01-1.414-1.414L17.586 5z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

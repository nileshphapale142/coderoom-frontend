import { MyDropDown } from '@/components/Utils';
import { selectedLanguage } from '@/Recoil';
import { languageOptions } from '@/Utils';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { FullScreenButton } from './fullScreen';
import { ResetCodeButton } from './resetCode';

export const FeatureRow = ({ qid, languages }: {
  qid: number, languages: {
    name: string, id: number
  }[] }) => {
  const [language, setLanguage] = useRecoilState(selectedLanguage);
  useEffect(() => {
    setLanguage(localStorage.getItem(`userLanguageQ${qid}`) || 'C');
  }, []);

  return (
    <div className='z-100 h-8 w-full border-b border-b-stone-400'>
      <div className='flex h-full flex-row items-center justify-between px-2'>
        {language && (
          <MyDropDown
            title='Language'
            options={languages}
            selectHandler={(lang) => {
              setLanguage(lang);
              localStorage.setItem(`userLanguageQ${qid}`, lang);
            }}
            defaultValue={{ id: -1, name: language }}
            isAbsolute={true}
          />
        )}

        <div className='block py-2'>
          {/* //todo: separate the buttons into components */}

          <ResetCodeButton />

          <FullScreenButton />
        </div>
      </div>
    </div>
  );
};

import { usePeriodicSave } from '@/components/Hooks';
import { selectedLanguage, userCode } from '@/Recoil';
import { langValue } from '@/Utils';
import { Editor } from '@monaco-editor/react';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import EditorLoading from './editor-loading';

type LangKey = 'C' | 'C++' | 'Java' | 'Python';

export const AcutalEditor = ({ qid }: { qid: number }) => {
  const [code, setCode] = useRecoilState(userCode);
  const language = useRecoilValue(selectedLanguage);
  const setStoredCode = usePeriodicSave(`userStoredCodeQ${qid}`, '', 1000);

  useEffect(() => {
    setCode(localStorage.getItem(`userStoredCodeQ${qid}`) || '');
  }, [language]);

  return (
    <div className='z-1 flex h-full'>
      <Editor
        width={`100%`}
        height={'100%'}
        language={langValue[language as LangKey]?.value}
        value={code}
        theme={'oceanic-next'}
        defaultValue={''}
        onChange={(value) => {
          setCode(value || '');
          setStoredCode(value || '');
        }}
        loading={<EditorLoading/>}
        options={{
          scrollbar: {
            vertical: 'auto',
            horizontal: 'auto',
          },
          minimap: {
            enabled: false,
          },
          scrollBeyondLastLine: false,
          overviewRulerLanes: 0,
        }}
      />
    </div>
  );
};

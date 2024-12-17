'use client';

import { SubNavBarItem } from '../subNavBar';
import { FeatureRow } from './featureRow';
import { AcutalEditor } from './actualEditor';
import { toCamelCase } from '@/Utils';

export const EditorSection = ({ qid, languages }: { qid: number, languages:string[] }) => {
  return (
    <div
      className='google-bw-bg relative m-[0.1rem]  flex flex-1-auto flex-col
                  overflow-hidden rounded-2 border border-solid border-gray'
    >
      <div className='relative h-10 rounded-2 '>
        <div className='block h-full bg-gray-300'>
          <SubNavBarItem
            name='Code'
            color='green-700'
            selected={true}
            action={() => {}}
          />
        </div>
      </div>

      <FeatureRow qid={qid} languages={languages.map((lang, idx) => {
        return {
          name: toCamelCase(lang),
          id: idx
        }
      })}/>

      <AcutalEditor qid={qid} />
    </div>
  );
};

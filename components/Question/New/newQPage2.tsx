import React from 'react';
import { Example } from './example';
import { Page2Inputs } from './';
import { CodeBlock } from '@/components/Utils';

export const NewQPage2 = () => {
  const exampleCode = `#include <bits/stdc++.h>
using namespace std;           

int main() {
  int t;
  cin >> t;
  while (t--) {
    int n;
    cin >> n;
    vector<int> nums;
    for (int i = 0; i < n; i ++) {
      int temp;
      cin >> temp;
      nums.push_back(temp);
    }
    cout << *min_element(nums.begin(), nums.end()) << endl;
  }

  return 0;
}`;

  return (
    <div className='flex h-full flex-row justify-between'>
      <div className='flex flex-col items-start justify-center p-8'>
        {/* // TODO: Separate into another component */}
        <div className='text-heading flex items-start justify-start'>
          <span className='text-3xl font-normal text-gray-800'>Solution</span>
        </div>
        <div className='h-8'></div>
        <Page2Inputs />
      </div>

      <Example>
        <div className='mt-4 flex w-full flex-col'>
          <span className='text-heading text-xl text-gray-600'>
            Code (Python)
          </span>
          <div className='relative overflow-y-scroll'>
            <span className='text-style flex flex-col font-normal text-gray-600'>
              <span className='mt-2 rounded-7 border-none'>
                <CodeBlock language='Python' value={exampleCode} />
              </span>
            </span>
          </div>
        </div>
      </Example>
    </div>
  );
};

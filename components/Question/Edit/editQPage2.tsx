import { Page2Inputs } from '../New';

export const EditQPage2 = () => {
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
    </div>
  );
};

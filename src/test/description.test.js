import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import Description from "../components/Hightlights/Description";
import axiosMock from 'axios';

jest.mock('axios')

it("description loading",()=>{
    const { getByTestId } = render(<Description />);
    expect(getByTestId("loading")).toHaveTextContent('loading...')
});

// it('should load and display the data', async () => {
//     const url = '/greeting'
//     const { getByTestId } = render(<Description url={url} />)
    
//     axiosMock.get.mockResolvedValueOnce({
//       data: { name: 'hello there' },
//     })
  
//     const greetingData = await waitForElement(() => getByTestId('showdata'))

    
  
//     expect(axiosMock.get).toHaveBeenCalledTimes(1)
//     expect(axiosMock.get).toHaveBeenCalledWith(url)
//     expect(greetingData).toHaveTextContent('hello there')
//   })
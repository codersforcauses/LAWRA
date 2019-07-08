import ChatBot from './react-simple-chatbot/ChatBot';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <ChatBot
    steps={[
      {
        id: '1',
        message:
          'Hi my name is Lawra. There are many different legal help centres in Western Australia and I’m here to make sure you speak to the right person.',
        trigger: '2'
      },
      {
        id: '2',
        message: 'What is your legal problem',
        trigger: '3'
      },
      {
        id: '3',
        options: [
          { value: 1, label: 'Family', trigger: '4' },
          { value: 2, label: 'Money', trigger: '101' },
          { value: 3, label: 'Crime', trigger: '101' }
        ]
      },
      {
        id: '4',
        options: [
          {
            value: 1,
            label: 'Family voilence and your safety',
            trigger: '103'
          },
          { value: 2, label: 'Resolving family law disputes', trigger: '103' },
          { value: 3, label: 'Seperation and Divorce', trigger: '103' },
          { value: 4, label: 'Child Custody', trigger: '103' },
          { value: 5, label: 'Relocating with child', trigger: '103' },
          {
            value: 6,
            label: 'Dividing Property and Possessions',
            trigger: '103'
          },
          { value: 7, label: 'Child Support', trigger: '100' },
          { value: 8, label: 'Restraining Orders', trigger: '103' }
        ]
      },
      {
        id: '99',
        message: 'family is #1',
        end: true
      },
      {
        id: '100',
        message: 'Peel CLS',
        end: true
      },
      {
        id: '101',
        message: 'NSCLS',
        end: true
      },
      {
        id: '102',
        message: 'CCLSWA',
        end: true
      },
      {
        id: '103',
        message: 'Peel CLS and NSCLS',
        end: true
      }
    ]}
    floating={true}
  />,
  document.getElementById('app')
);

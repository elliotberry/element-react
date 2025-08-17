import React from 'react';
import { createRoot } from 'react-dom/client';

import 'element-theme-default';

import './styles/base.scss';
import './styles/prism.css';

import App from './page';

function inChinaConfirm() {
  import('../src/message-box').then(MessageBox => {
    MessageBox.default.confirm('建议大陆用户访问部署在国内的站点，是否跳转？', '提示').then(() => {
      location.href = 'https://element-react.faas.ele.me';
    });
  });
}

function inChina() {
  if (window.fetch && document.domain !== 'element-react.faas.ele.me') {
    fetch('//restapi.amap.com/v3/ip?output=JSON&key=53a87f7c6a6d173be31d4123958ad5c2')
      .then(res => res.json())
      .then(({ city }) => {
        if (city && typeof city === 'string') {
          inChinaConfirm();
        }
      })
  }
}

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);

inChina();

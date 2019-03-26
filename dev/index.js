import './bootstrap';
import { registerWidget, init } from 'netlify-cms';
import 'netlify-cms/dist/cms.css';
import { PathnameControl, PathnamePreview } from '../src';

const config = {
  backend: {
    name: 'test-repo',
    login: false,
  },
  media_folder: 'assets',
  collections: [
    {
      name: 'test',
      label: 'Test',
      files: [
        {
          file: 'test.yml',
          name: 'test',
          label: 'Test',
          fields: [
            {
              name: 'pathname_0',
              label: 'Pathname - default',
              widget: 'pathname',
            },
            {
              name: 'pathname_1',
              label: 'Pathname - default',
              widget: 'pathname',
              required: false,
            },
            {
              name: 'pathname_2',
              label: 'Pathname - with url_prefix: /blog',
              widget: 'pathname',
              required: false,
              url_prefix: '/blog',
            },
            {
              name: 'pathname_3',
              label: 'Pathname - with url_origin: https://github.com',
              widget: 'pathname',
              required: false,
              url_origin: 'https://github.com',
            },
          ],
        },
      ],
    },
  ],
};

registerWidget('pathname', PathnameControl, PathnamePreview);

init({ config });

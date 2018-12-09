import React from 'react';
import PropTypes from 'prop-types';
import { StringPreview } from 'netlify-cms-widget-string';
import { fonts, colorsRaw } from 'netlify-cms-ui-default';

export default function PathnamePreview({ value, ...props }) {
  const { field } = props;
  const urlOrigin = field.get('url_origin') || window.location.origin;
  const urlPrefix = field.get('url_prefix') || '';
  const url = `${urlOrigin}${urlPrefix}${value}`;
  return (
    <StringPreview
      {...props}
      value={
        <span
          className="netlify-cms-widget-pathname-preview"
          style={{
            fontFamily: fonts.primary,
            border: `2px solid ${colorsRaw.grayLight}`,
            borderRadius: '5px',
            display: 'inline-block',
            margin: '4px 0',
          }}
        >
          <span
            className="netlify-cms-widget-pathname-preview__label"
            style={{
              color: colorsRaw.grayDark,
              background: colorsRaw.grayLight,
              padding: '2px 8px',
              display: 'inline-block',
              fontSize: '.9em',
            }}
          >
            URL
          </span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="netlify-cms-widget-pathname-preview__link"
            style={{
              color: colorsRaw.blue,
              textDecoration: 'none',
              padding: '0 8px',
            }}
          >
            {url}
          </a>
        </span>
      }
    />
  );
}

PathnamePreview.propTypes = {
  value: PropTypes.string,
  field: PropTypes.shape({
    get: PropTypes.func.isRequired,
  }).isRequired,
};
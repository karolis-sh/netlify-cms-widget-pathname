import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer, fonts, colorsRaw } from 'netlify-cms-ui-default';

export default function PathnamePreview({ value, ...props }) {
  if (!value) return null;
  const { field } = props;
  const urlOrigin = field.get('url_origin') || window.location.origin;
  const urlPrefix = field.get('url_prefix') || '';
  const url = `${urlOrigin}${urlPrefix}${value}`;
  return (
    <WidgetPreviewContainer>
      <span
        className="netlify-cms-widget-pathname-preview"
        style={{
          fontFamily: fonts.primary,
          border: `2px solid ${colorsRaw.grayLight}`,
          borderRadius: '5px',
          display: 'inline-flex',
          alignItems: 'baseline',
          margin: '4px 0',
        }}
      >
        <div
          className="netlify-cms-widget-pathname-preview__label"
          style={{
            color: colorsRaw.grayDark,
            background: colorsRaw.grayLight,
            padding: '2px 8px',
            fontSize: '.9em',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span>URL</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="netlify-cms-widget-pathname-preview__link"
          style={{
            color: colorsRaw.blue,
            textDecoration: 'none',
            padding: '0 8px',
            wordBreak: 'break-all',
          }}
        >
          {url}
        </a>
      </span>
    </WidgetPreviewContainer>
  );
}

PathnamePreview.propTypes = {
  value: PropTypes.string,
  field: PropTypes.shape({
    get: PropTypes.func.isRequired,
  }).isRequired,
};

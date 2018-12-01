import PropTypes from 'prop-types';
import React from 'react';
import { StringPreview } from 'netlify-cms-widget-string';

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
          className="netlify-cms-widget-pathname__preview"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            border: '2px solid rgb(223, 223, 227)',
            borderRadius: '5px',
            display: 'inline-block',
            margin: '4px 0',
          }}
        >
          <span
            style={{
              color: 'rgb(122, 130, 145)',
              background: 'rgb(223, 223, 227)',
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
            style={{
              color: '#007BE6',
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

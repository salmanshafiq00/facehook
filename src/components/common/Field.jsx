import React from 'react';

const getChildId = (children) => {
  const child = React.Children.only(children);

  if (child?.props && "id" in child.props) {
    return child.props.id;
  }
};

function Field({ label, children, htmlFor, error }) {
  const id = htmlFor || getChildId(children);

  return (
    <div className="form-control">
      {label && <label className="auth-label" htmlFor={id}>{label}</label>}
      {children}
      {!!error && <div role="alert" className="text-red-500 text-sm mt-1">{error.message}</div>}
    </div>
  );
};
export default Field;
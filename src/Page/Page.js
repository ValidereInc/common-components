import React from "react";
import * as PropTypes from "prop-types";
import ReactLoader from "../Loader/ReactLoader";
import FontAwesome from "react-fontawesome";
import Title from "../Title/Title";
import "./Page.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

/** The default margins are 15px */
const Page = ({
  className = "",
  style,
  title,
  onClick,
  children,
  loaded,
  breadcrumbs,
  headerClassName = "",
}) => {
  return (
    <div className={`page ${className}`} style={style}>
      {breadcrumbs && (
        <div className={`${headerClassName}`}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
      )}

      {title && (
        <div className="page__titleContainer">
          {onClick && (
            <FontAwesome
              name="arrow-left"
              onClick={onClick}
              className="page__link"
            />
          )}

          <Title className="page__title">{title}</Title>
        </div>
      )}

      {loaded !== undefined ? (
        <ReactLoader loaded={loaded} position={50}>
          {children}
        </ReactLoader>
      ) : (
        children
      )}
    </div>
  );
};

Page.propTypes = {
  /** The className given to the Page Container */
  className: PropTypes.string,
  /** The style given to the Page Container */
  style: PropTypes.object,
  /** The content to be displayed below the title */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /** The given title of the content */
  title: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  /** If present, displays a button that executes a function on click */
  onClick: PropTypes.func,
  /** If present, shows uses the ReactLoader component to show a loading image while content is loading */
  loaded: PropTypes.bool,
  /** An array of { title, onClick } objects, with title being what is displayed
   *  and onClick the function called when the breadcrumb is clicked
   */
  breadcrumbs: PropTypes.array,
  /** The className applied to the breadcrumbs container */
  headerClassName: PropTypes.string,
};

export default Page;

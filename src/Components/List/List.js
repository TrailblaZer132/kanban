import React from "react";

import "./List.css";
import Card from "../Card/Card";
import BacklogIcon from "../../Assets/Images/Backlog.svg";
import TodoIcon from "../../Assets/Images/To-do.svg";
import InProgressIcon from "../../Assets/Images/in-progress.svg";
import DoneIcon from "../../Assets/Images/Done.svg";
import CancelledIcon from "../../Assets/Images/Cancelled.svg";

import ZeroPriority from "../../Assets/Images/No-priority.svg";
import LowPriority from "../../Assets/Images/Img - Low Priority.svg";
import MediumPriority from "../../Assets/Images/Img - Medium Priority.svg";
import HighPriority from "../../Assets/Images/Img - High Priority.svg";
import UrgentPriority from "../../Assets/Images/SVG - Urgent Priority colour.svg";
import add from "../../Assets/Images/add.svg";
import dots from "../../Assets/Images/3 dot menu.svg";

let cardCount = 0;

export default function List(props) {
  return (
    <>
      <div className="list-container">
        <div className="list-header">
          <div className="list-header-left">
            {
              {
                status: (
                  <>
                    {
                      {
                        Backlog: (
                          <div className="list-icon">
                            <img
                              src={BacklogIcon}
                              alt="Backlog Icon"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        Todo: (
                          <div className="list-icon">
                            <img
                              src={TodoIcon}
                              alt="Todo Icon"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        "In progress": (
                          <div className="list-icon">
                            <img
                              src={InProgressIcon}
                              alt="In Progress Icon"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        Done: (
                          <div className="list-icon">
                            <img
                              src={DoneIcon}
                              alt="In Progress Icon"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        Cancelled: (
                          <div className="list-icon">
                            <img
                                src={CancelledIcon}
                                alt="In Progress Icon"
                                width="22"
                                height="22"
                            />
                          </div>
                        ),
                      }[props.listTitle]
                    }{" "}
                  </>
                ),
                user: <></>,
                priority: (
                  <>
                    {
                      {
                        0: (
                          <div className="card-tag-icon">
                            <img
                              src={ZeroPriority}
                              alt="Zero Priority"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        1: (
                          <div className="card-tag-icon">
                            <img
                              src={LowPriority}
                              alt="Low Priority"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        2: (
                          <div className="card-tag-icon">
                            <img
                              src={MediumPriority}
                              alt="Medium Priority"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        3: (
                          <div className="card-tag-icon">
                            <img
                              src={HighPriority}
                              alt="High Priority"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        4: (
                          <div className="card-tag-icon">
                            <img
                              src={UrgentPriority}
                              alt="Urgent Priority"
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                      }[props.listTitle]
                    }{" "}
                  </>
                ),
              }[props.groupValue]
            }

            <div className="list-title">
              {
                {
                  priority: (
                    <>
                      {props.priorityList
                        ? props.priorityList.map((priorityProperty) =>
                            priorityProperty.priority === props.listTitle ? (
                              <>{priorityProperty.name}</>
                            ) : null
                          )
                        : null}
                    </>
                  ),
                  status: <>{props.listTitle}</>,
                  user: <>{props.listTitle}</>,
                }[props.groupValue]
              }
            </div>
            <div className="list-sum">{cardCount}</div>
          </div>
          <div className="list-header-right">
            <div className="list-add-item">
                <img src={add} alt="Add" width="18" height="18" />
            </div>
            <div className="list-option-item">
                <img src={dots} alt = "Dots" width="18" height="18" />
            </div>
          </div>
        </div>

        <div className="list-card-items">
          {props.ticketDetails.map((ticket) => {
            if (ticket.status === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            } else if (ticket.priority === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            } else if (ticket.userObj.name === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            }
            return null;
          }, (cardCount = 0))}
        </div>
      </div>
    </>
  );
}

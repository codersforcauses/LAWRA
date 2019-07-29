import React from "react";
import SimpleChatBot from "./react-simple-chatbot/ChatBot";
import Link from "./Link";
import AvatarPath from "./head.png";

const ChatBot = ({ show = true, opened = false }) => {
  const floatingStyleOnLawraClose = {
    background: "#5ca8ef"
  };
  const defaultFloatingStyle = {
    display: "none"
  };

  return (
    <>
      {show && (
        <SimpleChatBot
          headerTitle="LAWRA"
          hideSubmitButton={true}
          floatingStyle={floatingStyleOnLawraClose}
          opened={opened}
          botAvatar={AvatarPath}
          hideUserAvatar={true}
          steps={[
            // {
            //   id: "intro1",
            //   message:
            //     "Hi my name is Lawra. There are many different legal help centres in Western Australia and I’m here to make sure you speak to the right person.",
            //   trigger: "intro2"
            // },
            {
              id: "intro2",
              message: "What is your legal problem",
              trigger: "choices"
            },
            {
              id: "choices",
              options: [
                { value: 1, label: "Family", trigger: "familyOptions" },
                { value: 2, label: "Money", trigger: "moneyOptions" },
                { value: 3, label: "Crime", trigger: "crimeOptions" }
              ]
            },
            {
              id: "familyOptions",
              options: [
                {
                  value: 1,
                  label: "Family violence and your safety",
                  trigger: "Peel&NSCLS"
                },
                {
                  value: 2,
                  label: "Resolving family law disputes",
                  trigger: "Peel&NSCLS"
                },
                {
                  value: 3,
                  label: "Separation and Divorce",
                  trigger: "Peel&NSCLS"
                },
                { value: 4, label: "Child Custody", trigger: "Peel&NSCLS" },
                {
                  value: 5,
                  label: "Relocating with child",
                  trigger: "Peel&NSCLS"
                },
                {
                  value: 6,
                  label: "Dividing Property and Possessions",
                  trigger: "Peel&NSCLS"
                },
                { value: 7, label: "Child Support", trigger: "Peel" },
                {
                  value: 8,
                  label: "Restraining Orders",
                  trigger: "Peel&NSCLS"
                },
                { value: 9, label: "Child Protection", trigger: "Peel&NSCLS" },
                { value: 10, label: "Elder Abuse", trigger: "Peel&NSCLS" },
                {
                  value: 11,
                  label: "Wills and Estate",
                  trigger: "Wills&Estate"
                }
              ]
            },
            {
              id: "Wills&Estate",
              options: [
                { value: 1, label: "Wills" },
                { value: 2, label: "Estates", trigger: "NSCLS" }
              ]
            },
            {
              id: "moneyOptions",
              options: [
                {
                  value: 1,
                  label: "Borrowing money and debt",
                  trigger: "NSCLS"
                },
                {
                  value: 2,
                  label: "Centrelink/Welfare Payments",
                  trigger: "Peel"
                },
                {
                  value: 3,
                  label: "Elder Abuse",
                  trigger: "Peel&NSCLS"
                },
                {
                  value: 4,
                  label: "Fines and infrigements",
                  trigger: "Peel&NSCLS"
                },
                {
                  value: 5,
                  label: "Going to court over money",
                  trigger: "NSCLS"
                },
                {
                  value: 6,
                  label: "Identity theft",
                  trigger: ""
                },
                {
                  value: 7,
                  label: "Natural disasters",
                  trigger: ""
                },
                {
                  value: 8,
                  label: "Work related payments",
                  trigger: "ELS"
                },
                {
                  value: 9,
                  label: "Criminal Injuries Compensation Scheme",
                  trigger: "Peel&NSCLS"
                }
              ]
            },
            {
              id: "crimeOptions",
              options: [
                {
                  value: 1,
                  label: "Restraining Orders",
                  trigger: "Peel&NSCLS"
                },
                {
                  value: 2,
                  label: "Fines and infringements",
                  trigger: "Peel&NSCLS"
                },
                {
                  value: 3,
                  label: "Going to court for a criminal charge",
                  trigger: "NSCLS"
                },
                {
                  value: 4,
                  label: "Criminal records and spent convictions",
                  trigger: "Peel&NSCLS"
                },
                {
                  value: 5,
                  label: "Traffic Offences",
                  trigger: "Peel&NSCLS"
                },
                {
                  value: 6,
                  label: "Prisoner information",
                  trigger: "NSCLS"
                },
                {
                  value: 7,
                  label: "Proceeds of crime - frozen assets",
                  trigger: "NSCLS"
                },
                {
                  value: 8,
                  label: "Rehearing and appeals",
                  trigger: "NSCLS"
                },
                {
                  value: 9,
                  label: "Under arrest and police powers",
                  trigger: "NSCLS"
                },
                {
                  value: 10,
                  label: "Criminal Injuries Compensation",
                  trigger: "Peel&NSCLS"
                }
              ]
            },
            {
              id: "Peel",
              component: (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginBottom: "1rem" }}>
                    {" "}
                    Call Peel CLS here: <b>(08) 9581 4511</b>
                  </div>

                  <Link
                    message="Website: https://www.peelcls.com.au/contact/"
                    link="https://www.peelcls.com.au/contact/"
                  />
                </div>
              ),
              end: true
            },
            {
              id: "NSCLS",
              component: (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginBottom: "1rem" }}>
                    {" "}
                    Call Mirrabooka NSCLS here: <b>(08) 9440 1663</b>
                    <p />
                    Call Joondalup NSCLS here: <b>(08) 9301 4413</b>
                  </div>
                  <Link
                    message="Website: https://nsclegal.org.au/"
                    link="https://nsclegal.org.au/"
                  />
                </div>
              ),

              end: true
            },
            {
              id: "CCLSWA",
              component: (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginBottom: "1rem" }}>
                    {" "}
                    Call CCLSWA here: <b>(08) 9221 7066</b>
                  </div>
                  <Link
                    message="Website: https://cclswa.org.au/contact/"
                    link="https://cclswa.org.au/contact/"
                  />
                </div>
              ),
              end: true
            },
            {
              id: "Peel&NSCLS",
              component: (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginBottom: "1rem" }}>
                    {" "}
                    Call Peel CLS here: <b>(08) 9581 4511</b>
                  </div>

                  <Link
                    message="Website: https://www.peelcls.com.au/contact/"
                    link="https://www.peelcls.com.au/contact/"
                  />
                </div>
              ),
              trigger: "NSCLS"
            },
            {
              id: "ELS",
              component: (
                <Link
                  message="Contact ELS CLS"
                  link="https://www.peelcls.com.au/contact/"
                />
              ),
              end: true
            }
          ]}
          floating={true}
        />
      )}
    </>
  );
};

export default ChatBot;

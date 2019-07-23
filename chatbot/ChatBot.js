import React from "react";
import SimpleChatBot from "./react-simple-chatbot/ChatBot";
import Link from "./Link";

const ChatBot = ({ show = true, opened = false }) => {
  const floatingStyleOnLawraClose = {
    background: "#40A7F1"
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
          steps={[
            {
              id: "2",
              message: "What is your legal problem",
              trigger: "3"
            },
            {
              id: "3",
              options: [
                { value: 1, label: "Family", trigger: "4" },
                { value: 2, label: "Money", trigger: "101" },
                { value: 3, label: "Crime", trigger: "101" }
              ]
            },
            {
              id: "4",
              options: [
                {
                  value: 1,
                  label: "Family violence and your safety",
                  trigger: "103"
                },
                {
                  value: 2,
                  label: "Resolving family law disputes",
                  trigger: "103"
                },
                { value: 3, label: "Separation and Divorce", trigger: "103" },
                { value: 4, label: "Child Custody", trigger: "103" },
                { value: 5, label: "Relocating with child", trigger: "103" },
                {
                  value: 6,
                  label: "Dividing Property and Possessions",
                  trigger: "103"
                },
                { value: 7, label: "Child Support", trigger: "100" },
                { value: 8, label: "Restraining Orders", trigger: "103" }
              ]
            },
            {
              id: "99",
              message: "family is #1",
              end: true
            },
            {
              id: "100",
              component: (
                <Link
                  message="Contact Peel CLS"
                  link="https://www.peelcls.com.au/contact/"
                />
              ),
              end: true
            },
            {
              id: "101",
              component: (
                <Link message="Contact NSCLS" link="https://nsclegal.org.au/" />
              ),

              end: true
            },
            {
              id: "102",
              component: (
                <Link
                  message="Contact CCLSWA"
                  link="https://cclswa.org.au/contact/"
                />
              ),
              end: true
            },
            {
              id: "103",
              component: (
                <>
                  <Link
                    message="Contact Peel CLS"
                    link="https://www.peelcls.com.au/contact/"
                  />
                  <span style={{ margin: "0 1rem" }} />
                  <Link
                    message="Contact NSCLS"
                    link="https://nsclegal.org.au/"
                  />
                </>
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

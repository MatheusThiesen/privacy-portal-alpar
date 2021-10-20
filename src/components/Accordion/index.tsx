import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import type { NextPage } from "next";
import styles from "./styles.module.scss";

interface AccordionProps {
  questions: QuestionProps[];
  marginZero?: boolean;
  isStatusActive?: boolean;
}

interface QuestionProps {
  title: string;
  subTitle?: string;
  response: string | ResponseProps[];
  Component?: NextPage<any>;
  setEmailSent?: (e: boolean) => void;
}

interface QuestionActionsProps extends QuestionProps {
  title: string;
  response: string | ResponseProps[];
  isActive: boolean;
}

interface ResponseProps {
  type: 1 | 2;
  title?: string;
  data: string | string[];
}

export const Accordion: NextPage<AccordionProps> = ({
  questions: questionsRecive,
  marginZero,
  isStatusActive,
}) => {
  const [questions, setQuestions] = useState<QuestionActionsProps[]>([]);

  useEffect(() => {
    const questions = questionsRecive.map((question) => ({
      ...question,
      isActive: isStatusActive ? true : false,
    }));

    setQuestions(questions);
  }, []);

  function handleActive(title: string) {
    const questionsNormalized = questions.filter((f) => f.title !== "");
    const question = questionsNormalized.find((f) => f.title === title);
    if (question) question.isActive = !question.isActive;

    setQuestions(questionsNormalized);
  }

  return (
    <div
      style={{
        margin: marginZero ? 0 : undefined,
        width: marginZero ? "100%" : undefined,
      }}
      className={styles.container}
    >
      {questions.map((question, index) => (
        <article key={index}>
          <div
            onClick={() => handleActive(question.title)}
            className={
              question.isActive
                ? styles.accordionTitle
                : styles.accordionTitleInative
            }
          >
            <span>{question.title}</span>
            <BiChevronDown />
          </div>

          <div
            style={{ cursor: "pointer" }}
            onClick={() => handleActive(question.title)}
          >
            <p className={styles.accordionTextActive}>{question.subTitle}</p>
          </div>
          <div
            className={
              !question.isActive
                ? styles.accordionText
                : styles.accordionTextActive
            }
          >
            {typeof question.response === "object" ? (
              question.response.map((reponse, index) => {
                return reponse.type === 1 ? (
                  <div key={index}>
                    <h3>{reponse.title}</h3>
                    <p>{reponse.data}</p>
                  </div>
                ) : reponse.type === 2 && typeof reponse.data === "object" ? (
                  <div key={index}>
                    <ul>
                      {reponse.data.map((p, index) => (
                        <li key={index}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ) : null;
              })
            ) : (
              <p>{question.response}</p>
            )}

            {question.Component && question.isActive && (
              <question.Component setEmailSent={question.setEmailSent} />
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

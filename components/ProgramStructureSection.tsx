import React from "react";
import { CodeCard } from "./CodeCard";

export function ProgramStructureSection() {
  return (
    <section className="content-area">
      <h2 className="content-title">Program Structure</h2>

      <div className="content-inner">
        <h3 className="chapter-title">Chapter №0</h3>
        <p className="muted-paragraph">
          &quot;A computer program is a sequence of instructions that tells the
          computer what it needs to do.&quot;
        </p>

        <h3 className="section-heading">Statements</h3>
        <p className="muted-paragraph">
          A statement is the most common type of instruction in programs. It is
          the smallest independent unit in the C++ language.
          <br />
          In programming, a statement is similar to a sentence in the Russian
          language. We write sentences to express an idea; in C++, we write
          statements to perform a specific task. All statements in C++ end with
          a semicolon (;).
        </p>
        <p className="muted-paragraph">
          &quot;There are many different types of statements in the C++ language. Let’s
          look at the most common ones:&quot;
        </p>

        <CodeCard />

        <p className="explanation">
          <span className="highlight">&quot;int x&quot;</span> is a declaration statement. It
          tells the compiler that <span className="highlight">&quot;x&quot;</span> is a variable.
          In programming, each variable occupies a certain number of addressable
          memory cells depending on its type. The smallest addressable memory
          cell is a byte. A variable of type{" "}
          <span className="highlight">&quot;int&quot;</span> can take up to 4 bytes, meaning up to
          4 addressable memory cells. All variables in a program must be
          declared before they are used. We will discuss variables in more
          detail in the upcoming lessons.
        </p>

        <p className="explanation">
          <span className="highlight">&quot;x = 5;&quot;</span> is an assignment statement.
          Here, we assign the value 5 to the variable x.
        </p>
      </div>
    </section>
  );
}

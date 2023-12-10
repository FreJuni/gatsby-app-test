import React from "react";
import Layout from "../Layout/Layout";
import SEO from "../component/SEO";

const Error = () => {
  return (
    <Layout>
      <SEO titl="Error" />
      <section className="center-con">
        <div className="error">
          <div className="error-container">
            <h1>404</h1>
            <p>Oops We can't find what you are looking for!</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Error;

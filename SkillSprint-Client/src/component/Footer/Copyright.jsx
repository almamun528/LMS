import React from "react";

function Copyright() {
  return (
    <section>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Skill
            Sprint
          </p>
        </aside>
      </footer>
    </section>
  );
}

export default Copyright;

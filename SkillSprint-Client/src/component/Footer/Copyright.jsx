import React from "react";

function Copyright() {
  return (
    <section>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Abdullah Al Mamun. All
            rights reserved.
          </p>
        </aside>
      </footer>
    </section>
  );
}

export default Copyright;

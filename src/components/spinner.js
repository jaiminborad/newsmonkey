import React from "react";
import loading from "./loading.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={loading}
        class="img-fluid mx-auto d-block img-thumbnail"
        alt="loading"
      />
    </div>
  );
}

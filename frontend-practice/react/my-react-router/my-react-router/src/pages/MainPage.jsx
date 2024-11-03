import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      MainPage
      <Link to="/sample">샘플로 이동</Link>
    </div>
  );
}

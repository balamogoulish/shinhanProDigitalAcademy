import React from "react";
import { Link } from "react-router-dom";

export default function SamplePage() {
  return (
    <div>
      SamplePage
      <Link to="/">메인으로 이동</Link>
    </div>
  );
}

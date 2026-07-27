"use client";

import { FormEvent, useState } from "react";

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="formSuccess" role="status">
        <span>✓</span>
        <h3>已收到您的體驗意願</h3>
        <p>這是預覽版成功畫面。正式發布前可再串接您指定的表單或 CRM。</p>
        <button type="button" onClick={() => setSubmitted(false)}>返回表單</button>
      </div>
    );
  }

  return (
    <form className="reserveForm" onSubmit={handleSubmit}>
      <label>
        <span>姓名</span>
        <input name="name" type="text" placeholder="您的姓名" required />
      </label>
      <label>
        <span>公司／品牌</span>
        <input name="company" type="text" placeholder="公司或品牌名稱" required />
      </label>
      <label>
        <span>聯絡方式</span>
        <input name="contact" type="text" placeholder="Email 或手機號碼" required />
      </label>
      <label>
        <span>偏好體驗地區</span>
        <select name="location" defaultValue="" required>
          <option value="" disabled>請選擇地區</option>
          <option value="north">北部</option>
          <option value="central">中部</option>
          <option value="south">南部</option>
          <option value="other">其他／再討論</option>
        </select>
      </label>
      <button className="submitButton" type="submit">送出免費體驗預約 <span>↗</span></button>
      <small>送出即表示您同意由專人聯繫體驗安排。</small>
    </form>
  );
}

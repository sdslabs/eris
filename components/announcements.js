import React from "react";

const Announcements = ({ announcements }) => {
  return (
    <>
      <h1>Announcements</h1>
      <div className="announcements">
        {announcements.map((announcement, index) => (
          <AnnouncementCard
            key={index}
            image={announcement.image}
            title={announcement.title}
            description={announcement.description}
            date={new Date(announcement.date)}
          />
        ))}
      </div>
    </>
  );
};

const AnnouncementCard = ({ image, title, description, date }) => {
  const { formattedDate, formattedTime } = formatDateAndTime(date);
  return (
    <div className="announcement_card">
      <img src={image} alt="announcement" className="banner" />
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
      <p className="time">
        {formattedDate} | {formattedTime}
      </p>
    </div>
  );
};

function formatDateAndTime(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = String(hours).padStart(2, "0");

  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return { formattedDate, formattedTime };
}

export default Announcements;

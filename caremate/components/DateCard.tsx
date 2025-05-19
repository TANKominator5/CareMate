import React from "react";

type DateCardItem = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

type DateCardProps = {
  title?: string;
  items?: DateCardItem[];
  editable?: boolean;
};

const DateCard: React.FC<DateCardProps> = ({
  title = "Next Important Date",
  items = [],
  editable = false,
}) => {
  return (
    <div className="bg-gradient-to-r from-primary-light to-primary-DEFAULT rounded-lg shadow-lg overflow-hidden text-white">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/30 flex items-center justify-center mr-3 mt-1">
                {item.icon || (
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              <div>
                <p className="font-medium">{item.title}</p>
                {item.subtitle && <p className="text-sm text-white/80">{item.subtitle}</p>}
              </div>
            </div>
          ))}
        </div>

        {editable && (
          <div className="mt-6">
            <textarea
              className="w-full bg-white/20 rounded-lg p-3 text-white placeholder-white/70 focus:outline-none"
              placeholder="Write your thoughts or reminders..."
              rows={3}
            />
            <button className="mt-3 bg-white text-primary-DEFAULT px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
              Save Note
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateCard;
import React from "react";
import {
  ArrowUp,
  BookOpen,
  MessageSquare,
  Target,
  Trophy,
  Users,
  Rocket,
  BookText,
  Zap,
  Star,
} from "lucide-react";

const JoinSuperstarCommunity = () => {
  const benefits = [
    {
      id: 1,
      icon: <ArrowUp size={24} />,
      title: "Business Growth Tips & Tools",
      description:
        "Tested strategies and smart tools to grow daily — no more guesswork!",
    },
    {
      id: 2,
      icon: <BookOpen size={24} />,
      title: "Exclusive Masterclasses & Workshops",
      description:
        "Learn directly from experts who know real retail. Not theory, only practical!",
    },
    {
      id: 3,
      icon: <MessageSquare size={24} />,
      title: "Dedicated WhatsApp Support Group",
      description:
        "Your 24x7 growth circle – ask doubts, share wins, and get instant support from your tribe.",
    },
    {
      id: 4,
      icon: <Target size={24} />,
      title: "Ready-to-Use Templates & Campaign Kits",
      description:
        "Post-ready content, seasonal campaign kits — no time waste, just plug and play.",
    },
    {
      id: 5,
      icon: <Trophy size={24} />,
      title: "Recognition for Top Performers",
      description:
        "We celebrate your wins. Get awarded, featured, and become a Retail Role Model!",
    },
    {
      id: 6,
      icon: <Users size={24} />,
      title: "Customer Focus Marketing Weekly Meetups",
      description:
        "Every week, one mindset, one mission — stronger connection, better customer engagement.",
    },
    {
      id: 7,
      icon: <Rocket size={24} />,
      title: "Early Access to Premium Programs",
      description:
        "Be the first to join powerful growth programs before public launch.",
    },
    {
      id: 8,
      icon: <BookText size={24} />,
      title: "Real Retail Case Studies & Success Stories",
      description:
        "Learn from those who've already walked the path. Success leaves clues!",
    },
    {
      id: 9,
      icon: <Zap size={24} />,
      title: "Gamified Learning + Growth Challenges",
      description:
        "Fun + Implementation = Results! Level up through action, not just learning.",
    },
  ];

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: "white",
        color: "#313166",
        lineHeight: "1.6",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            padding: "40px 0 60px",
            // background: "linear-gradient(to bottom, #ffffff, #f9f7ff)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              //   backgroundImage:
              //     "radial-gradient(#ec396f22 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              opacity: 0.6,
              zIndex: 0,
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "#313166",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
                lineHeight: 1.2,
                textShadow: "0 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  position: "relative",
                  padding: "0 20px",
                }}
              >
                <span
                  style={{
                    color: "#ec396f",
                    animation: "pulse 2s infinite",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <Star size={40} fill="#ec396f" /> */}
                </span>
                <span
                  style={{
                    background: "linear-gradient(90deg, #313166, #ec396f)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    padding: "0 10px",
                  }}
                >
                  Superstar Retailers Hub
                </span>
                <span
                  style={{
                    color: "#ec396f",
                    animation: "pulse 2s infinite 0.5s",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <Star size={40} fill="#ec396f" /> */}
                </span>
              </div>
              <div
                style={{
                  height: "4px",
                  width: "100px",
                  background: "linear-gradient(90deg, #ec396f, #ff9e2c)",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
              />
            </h1>

            <p
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.7rem)",
                marginBottom: "20px",
                color: "#313166",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap",
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  padding: "8px",
                  background: "#ffecf1",
                  borderRadius: "50%",
                }}
              >
                <Target size={24} color="#ec396f" />
              </span>
              <span>Why Join the Retail Superstars Community?</span>
            </p>

            <div
              style={{
                maxWidth: "800px",
                margin: "0 auto 30px",
                position: "relative",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                  color: "#555",
                  marginBottom: "30px",
                  padding: "25px",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  borderLeft: "4px solid #ec396f",
                  position: "relative",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "15px",
                    fontSize: "60px",
                    color: "#ec396f10",
                    fontFamily: "serif",
                    lineHeight: 1,
                  }}
                >
                  "
                </span>
                Because here, you don't just learn business... you grow,
                implement, get recognised – and become a{" "}
                <span
                  style={{
                    color: "#ec396f",
                    fontWeight: "bold",
                    fontStyle: "normal",
                    position: "relative",
                  }}
                >
                  Retail Superstar!
                  <Zap
                    size={20}
                    style={{
                      position: "absolute",
                      right: "-25px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#ff9e2c",
                    }}
                  />
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    right: "15px",
                    fontSize: "60px",
                    color: "#ec396f10",
                    fontFamily: "serif",
                    lineHeight: 1,
                  }}
                >
                  "
                </span>
              </p>
            </div>

            <div
              style={{
                display: "inline-block",
                perspective: "1000px",
                // marginBottom: "40px",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                  fontWeight: "bold",
                  color: "#ffffff",
                  margin: 0,
                  padding: "15px 40px",
                  background: "linear-gradient(45deg, #ec396f, #ff6b8b)",
                  borderRadius: "50px",
                  boxShadow: "0 4px 20px rgba(236, 57, 111, 0.3)",
                  transformStyle: "preserve-3d",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 1,
                  ":hover": {
                    transform: "translateY(-3px) rotateX(10deg)",
                    boxShadow: "0 7px 25px rgba(236, 57, 111, 0.4)",
                  },
                  ":active": {
                    transform: "translateY(1px)",
                  },
                  "::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    // background:
                    //   "linear-gradient(45deg, transparent, rgba(255,255,255,0.3))",
                    zIndex: -1,
                    transition: "all 0.3s ease",
                  },
                  ":hover::before": {
                    transform: "translateX(100%)",
                  },
                }}
                tabIndex="0"
              >
                <span
                  style={{
                    display: "inline-block",
                    transform: "translateZ(20px)",
                  }}
                >
                  Your 9 Superstar Benefits
                </span>
                {/* <span
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <ArrowUp size={20} style={{ transform: "rotate(45deg)" }} />
                </span> */}
              </h2>
            </div>
          </div>
        </div>

        {/* Benefits Container - CSS Grid for proper responsive layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "25px",
            marginBottom: "60px",
            // Media query breakpoints handled by grid-template-columns
            "@media (min-width: 768px)": {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
            "@media (min-width: 1024px)": {
              gridTemplateColumns: "repeat(3, 1fr)",
            },
          }}
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              style={{
                background: "white",
                border: "2px solid #e5e7eb",
                borderRadius: "12px",
                padding: "24px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#ec396f",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  {benefit.id}
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(236, 57, 111, 0.1)",
                    color: "#ec396f",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {benefit.icon}
                </div>
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#313166",
                  marginBottom: "12px",
                  lineHeight: "1.4",
                }}
              >
                {benefit.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.5",
                  fontSize: "1rem",
                  flex: 1,
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "40px 30px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                fontWeight: "bold",
                color: "#313166",
                marginBottom: "30px",
              }}
            >
              Ready to Become a Retail Superstar?
            </h2>

            <button
              style={{
                backgroundColor: "#ec396f",
                color: "white",
                border: "none",
                padding: "15px 30px",
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "scale(1)";
              }}
              onClick={() =>
                window.open("https://nas.io/superstar-retailers-hub", "_blank")
              }
            >
              Join the Community
            </button>

            <p
              style={{
                color: "#666",
                fontSize: "0.9rem",
                marginTop: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <Rocket size={18} /> Transform your retail journey today!
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for better responsive grid support */}
      <style jsx>{`
        @media (max-width: 767px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .benefits-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default JoinSuperstarCommunity;

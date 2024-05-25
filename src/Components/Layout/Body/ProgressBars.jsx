import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Body.css';

export const skills = [
    {
      name: "HTML",
      percentage: 93,
    },
    {
      name: "CSS",
      percentage: 85,
    },
    {
      name: "Tailwind",
      percentage: 10,
    },
    {
      name: "Javascript",
      percentage: 98,
    },
    {
      name: "React",
      percentage: 89,
    },
    {
      name: "React Native",
      percentage: 90,
    },
    {
      name: "Git",
      percentage: 75,
    },
    {
      name: "Redux",
      percentage: 75,
    },
  ]



const ProgressBars = () => {
  return (
    <div className='progress-container'>
      {skills.map((skill, index) => (
        <div key={index} className={`progress-bar-container ${skill.name.length > 8 ? 'long-name' : ''}`}>
          <CircularProgressbar
            className='progress-bar'
            value={skill.percentage}
            text={`${skill.name}`}
          />
        </div>
      ))}
    </div>
  )
}

export default ProgressBars

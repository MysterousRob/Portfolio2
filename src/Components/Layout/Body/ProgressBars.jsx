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
  ]



const ProgressBars = () => {
    const percentage = 69
  return (
    <div className='progress-container' >
        {skills.map((skill, index) => (
            <CircularProgressbar className='progress-bar' value={skill.percentage} text={`${skill.name}%`} />
        ))}
    </div>
  )
}

export default ProgressBars

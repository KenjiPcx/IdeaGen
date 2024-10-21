import React from 'react';

interface ProblemCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
}

const ProblemCard = ({ title, description, category, difficulty }: ProblemCardProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Difficulty: {difficulty}</p>
    </div>
  );
};

export default ProblemCard;

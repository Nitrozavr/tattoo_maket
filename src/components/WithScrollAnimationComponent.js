import React, { useRef, useEffect } from 'react';

const withScrollAnimation = (WrappedComponent, animations) => {
  return (props) => {
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1'; // Показать элемент
              for (const animationName in animations) {
                if (Object.hasOwnProperty.call(animations, animationName)) {
                  const selectors = animations[animationName];
                  if (Array.isArray(selectors)) {
                    selectors.forEach(selector => {
                      const elements = entry.target.querySelectorAll(selector);
                      elements.forEach(element => {
                        const classes = animationName.split(' ');
                        classes.forEach(className => {
                          element.classList.add('animate__animated', className);
                        });
                      });
                    });
                  } else {
                    const elements = entry.target.querySelectorAll(selectors);
                    elements.forEach(element => {
                      const classes = animationName.split(' ');
                      classes.forEach(className => {
                        element.classList.add('animate__animated', className);
                      });
                    });
                  }
                }
              }
              observer.unobserve(entry.target); // Удалить наблюдатель после срабатывания анимации
            }
          });
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        ref.current.style.opacity = '0'; // Скрыть элемент по умолчанию
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref, animations]);

    return <WrappedComponent setRef={ref} {...props} />;
  };
};

export default withScrollAnimation;

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (url: string, title: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
      page_title: title,
    });
  }
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'button', `${buttonName} - ${location}`);
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('submit', 'form', formName);
};

export const trackScroll = (scrollDepth: number) => {
  trackEvent('scroll', 'engagement', `${scrollDepth}%`, scrollDepth);
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('view', 'section', sectionName);
};

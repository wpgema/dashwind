(function(){
    const storageKey = 'theme';

    function getSystemPreference(){
        try{ return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
        catch(e){ return 'light'; }
    }

    function apply(theme){
        const html = document.documentElement;
        if(theme === 'dark') html.classList.add('dark'); else html.classList.remove('dark');
    }

    function init(){
        const saved = localStorage.getItem(storageKey);
        const theme = saved || getSystemPreference();
        apply(theme);
    }

    function toggleTheme(){
        const html = document.documentElement;
        const isDark = html.classList.toggle('dark');
        localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
        window.dispatchEvent(new CustomEvent('theme:change', { detail: isDark ? 'dark' : 'light' }));
        return isDark;
    }

    function setTheme(t){
        apply(t);
        localStorage.setItem(storageKey, t);
        window.dispatchEvent(new CustomEvent('theme:change', { detail: t }));
    }

    window.ConsoleTheme = { init, toggleTheme, setTheme };
    window.toggleTheme = function(){ return window.ConsoleTheme.toggleTheme(); };

    document.addEventListener('DOMContentLoaded', init);
})();

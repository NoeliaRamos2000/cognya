# COGNYA Editores — landing de prueba

Sitio estático para compartir. El repositorio es **privado** a propósito.

No contiene el código de la plataforma, ni PDFs, ni secretos.

## GitHub Pages

En el plan Free, GitHub no deja publicar Pages desde un repo privado.
Cuando la cuenta tenga Pro (o Team), activarlo así:

```bash
gh api --method POST repos/oscaramos/cognya/pages \
  -f "build_type=legacy" \
  -f "source[branch]=main" \
  -f "source[path]=/"
```

La URL quedaría en `https://oscaramos.github.io/cognya/`.
El sitio sería público; el código de este repo seguiría privado.

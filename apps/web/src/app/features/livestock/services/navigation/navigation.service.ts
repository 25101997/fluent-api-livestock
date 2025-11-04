import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

const STORAGE_KEY_PREV = 'nav.previous';
const STORAGE_KEY_CURR = 'nav.current';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private _current = new BehaviorSubject<string>(this.load(STORAGE_KEY_CURR) ?? '/');
  private _previous = new BehaviorSubject<string>(this.load(STORAGE_KEY_PREV) ?? '/livestock/');

  /** Observables por si quieres suscribirte en algún componente */
  readonly current$ = this._current.asObservable();
  readonly previous$ = this._previous.asObservable();

  constructor(private router: Router) {
    // Escucha cambios de ruta y actualiza historial
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe(e => {
      const prev = this._current.value;    // lo que era current pasa a previous
      const curr = e.urlAfterRedirects;

      this._previous.next(prev);
      this._current.next(curr);

      this.save(STORAGE_KEY_PREV, prev);
      this.save(STORAGE_KEY_CURR, curr);
    });
  }

  /** Lecturas directas (sincrónicas) */
  get current(): string { return this._current.value; }
  get previous(): string { return this._previous.value; }

  /** Sobrescribe manualmente la ruta previa (p.ej. en un formulario) */
  setPrevious(path: string) {
    this._previous.next(path);
    this.save(STORAGE_KEY_PREV, path);
  }

  /** Regresa a previous si existe; si no, a fallback (default: /livestock/) */
  goBack(fallback = '/livestock/') {
    const target = this.previous || fallback;
    this.router.navigateByUrl(target);
  }

  /** Utils de almacenamiento */
  private load(key: string): string | null {
    try { return sessionStorage.getItem(key); } catch { return null; }
  }
  private save(key: string, value: string) {
    try { sessionStorage.setItem(key, value); } catch {}
  }
}

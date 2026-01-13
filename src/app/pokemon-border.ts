import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appPokemonBorder]',
  standalone: true,
})
export class PokemonBorder {
  private initialColor: string;
  pokemonType = input.required<string>();

  constructor(private el: ElementRef) {
    this.initialColor = this.el.nativeElement.style.borderColor;
    this.el.nativeElement.style.borderWidth = '3px';
    this.el.nativeElement.style.borderStyle = 'solid';
  }

  @HostListener('mouseenter') onMouseEnter() {
    const color = this.getBorderColor();
    this.setBorder(color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const color = this.initialColor;
    this.setBorder(color);
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }

  private getBorderColor() {
    switch (this.pokemonType()) {
      case 'Feu':
        return '#EF5350';
      case 'Eau':
        return '#42A5F5';
      case 'Plante':
        return '#66BB6A';
      case 'Electrik':
        return '#FDD835';
      case 'Poison':
        return '#AB47BC';
      case 'Vol':
        return '#90CAF9';
      case 'Insecte':
        return '#9CCC65';
      case 'Normal':
        return '#BDBDBD';
      case 'Combat':
        return '#FF7043';
      default:
        return '#000000';
    }
  }
}

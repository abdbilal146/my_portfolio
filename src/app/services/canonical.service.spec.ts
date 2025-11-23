import { TestBed } from '@angular/core/testing';
import { CanonicalService } from './canonical.service';
import { DOCUMENT } from '@angular/common';
import { Renderer2, RendererFactory2 } from '@angular/core';

describe('CanonicalService', () => {
  let service: CanonicalService;
  let mockDocument: any;
  let mockRenderer: jasmine.SpyObj<Renderer2>;
  let mockRendererFactory: jasmine.SpyObj<RendererFactory2>;

  beforeEach(() => {
    mockRenderer = jasmine.createSpyObj('Renderer2', ['createElement', 'setAttribute', 'appendChild']);
    mockRendererFactory = jasmine.createSpyObj('RendererFactory2', ['createRenderer']);
    mockRendererFactory.createRenderer.and.returnValue(mockRenderer);

    mockDocument = {
      querySelector: jasmine.createSpy('querySelector'),
      head: {}
    };

    TestBed.configureTestingModule({
      providers: [
        CanonicalService,
        { provide: DOCUMENT, useValue: mockDocument },
        { provide: RendererFactory2, useValue: mockRendererFactory }
      ]
    });
    service = TestBed.inject(CanonicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setCanonicaUrl', () => {
    it('should update existing canonical link', () => {
      const mockLink = jasmine.createSpyObj('HTMLLinkElement', ['setAttribute']);
      mockDocument.querySelector.and.returnValue(mockLink);

      service.setCanonicaUrl('https://example.com');

      expect(mockDocument.querySelector).toHaveBeenCalledWith("link[rel='canonical']");
      expect(mockLink.setAttribute).toHaveBeenCalledWith('href', 'https://example.com');
      expect(mockRenderer.createElement).not.toHaveBeenCalled();
    });

    it('should create new canonical link if not exists', () => {
      mockDocument.querySelector.and.returnValue(null);
      const mockLink = jasmine.createSpyObj('HTMLLinkElement', ['setAttribute']);
      mockRenderer.createElement.and.returnValue(mockLink);

      service.setCanonicaUrl('https://example.com');

      expect(mockDocument.querySelector).toHaveBeenCalledWith("link[rel='canonical']");
      expect(mockRenderer.createElement).toHaveBeenCalledWith('link');
      expect(mockLink.setAttribute).toHaveBeenCalledWith('rel', 'canonical');
      expect(mockLink.setAttribute).toHaveBeenCalledWith('href', 'https://example.com');
      expect(mockRenderer.appendChild).toHaveBeenCalledWith(mockDocument.head, mockLink);
    });
  });
});

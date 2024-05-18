## List of processes
<div style="text-align:center">
  <img src="../images/Process_diagram.png" alt="" width="700">
  <br>
  <br>
</div>

## Inelastic electron scattering
The inelastic mean free path $\lambda_{peh}^{-1}$ for a charge particle in a crystalline material can be obtained using the dielectric permittivity $\varepsilon(\omega,q)$ [1]:

<center>
    $\lambda_{peh}^{-1}(E) = \frac{2 Z^{2}}{\pi a_{B} m_{e} v^{2}(E)} \int_{0}^{E} d(\hbar \omega) \int_{q_{\text{min}}}^{q_{\text{max}}} \frac{dq}{q} \operatorname{Im}\left(- \frac{1}{\varepsilon(\omega,q)}\right)$,
</center>
<center>  
    $q_{_{min}^{max}} = \frac{1}{\hbar c} (\sqrt{E(E+2mc^{2})}) \pm \sqrt{(E- \hbar \omega) (E- \hbar \omega + 2mc^{2})}$.
</center>

Here, $Ze$ is the particle charge, $a_{B}$ is the Bohr radius for hydrogen, $m_{e}$ is the electron mass, $\hbar$ is the reduced Planck constant, $v(E) = c \frac{\sqrt{E(E+2mc^{2})}}{E+2mc^{{2}}}$ is the particle velocity, $m$ is the particle mass, $c$ is the light velocity.

The dielectric permittivity can be calculated using the TDDFT method or the more accurate GW+BSE approach implemented in the Quantum Espresso package [2].

For ionic crystals imaginary part $\varepsilon_{2}(\omega, 0)$ of the dielectric permittivity can be obtained by using the photoexcitation cross section $\sigma_{i}$ of atomic shells of components presented in the Evaluated Photon Data Library (EPDL97) [3] taking into account the correction of the population $\Delta f_{i}$ and the energy $\Delta E_{i}$ of atomic shells:

<center>  
    $\varepsilon_{2}(\omega, 0) = \sum_{i} \varepsilon_{2}^{i}(\omega, 0) = \frac{nc}{\omega} \sum_{i} (f_{i} + \Delta f_{i}) N_{i} \sigma_{i} (\hbar \omega + \Delta E_{i})$.
</center>

Here, $n$ is the refractive index, $f_{i}$ is the population of i-th atomic shell, $N_{i}$ is the concentration of i-th-atomic-shell-related element.

To extrapolate the dielectric permittivity for the case of nonzero $q$, the Generalized Oscillator Strength (GOS) approximation can be used [1]:

<center>  
    $\varepsilon_{2}(\omega, q) = \frac{\sqrt{m_{e}}}{2 \sqrt{2} \hbar^{2} \omega q} \sum_{i} \int_{E_{i} + (\sqrt{\hbar \omega - E_{i}} - \frac{\hbar q}{\sqrt{2 m_{e}}})^{2}}^{E_{i} + (\sqrt{\hbar \omega - E_{i}} + \frac{\hbar q}{\sqrt{2 m_{e}}})^{2}} \frac{\hbar \omega'}{\sqrt{\hbar \omega' - E_{i}}} \varepsilon_{2}^{i}(\omega', 0) d(\hbar \omega')$.
</center>

The Kramers-Kronig relations can be used to obtain the real part $\varepsilon_{1}(\omega, q)$ of the dielectric permittivity to correct the energy loss function:

<center>  
    $\varepsilon_{1}(\omega, q) = 1 + \frac{2}{\pi} \mathcal{P} \int_{0}^{\infty} \frac{\omega' \varepsilon_{2}(\omega', q)}{\omega'^{2}-\omega^{2}} d \omega'$.
</center>

<br>

## Auger process
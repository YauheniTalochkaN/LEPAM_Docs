# Here the description of particle processes is provided
# List of processes
<div style="text-align:center">
  <img src="../images/Process_diagram.png" alt="" width="700">
  <br>
  <br>
</div>

# Inelastic electron scattering
The inelastic mean free path $\lambda_{peh}^{-1}$ for a charge particle in a crystalline material can be obtained using the dielectric permittivity $\varepsilon(\omega,q)$ [1]:

<center>
    $\lambda_{peh}^{-1}(E) = \frac{2 Z^{2}}{\pi a_{B} m_{e} v^{2}(E)} \int_{0}^{E} d(\hbar \omega) \int_{q_{\text{min}}}^{q_{\text{max}}} \frac{dq}{q} \operatorname{Im}\left(- \frac{1}{\varepsilon(\omega,q)}\right)$,
</center>
<center>  
    $q_{_{min}^{max}} = \frac{1}{\hbar c} (\sqrt{E(E+2mc^{2})}) \pm \sqrt{(E- \hbar \omega) (E- \hbar \omega + 2mc^{2})}$.
</center>

Here, $Ze$ is the particle charge, $a_{B}$ is the Bohr radius for hydrogen, $m_{e}$ is the electron mass, $\hbar$ is the reduced Planck constant, $v(E) = c \frac{\sqrt{E(E+2mc^{2})}}{E+2mc^{{2}}}$ is the particle velocity, $m$ is the particle mass, $c$ is the light velocity.

The dielectric permittivity can be calculated using the TDDFT method or the more accurate GW+BSE approach implemented in the Quantum Espresso package [2].
<br>
<br>
# Auger process